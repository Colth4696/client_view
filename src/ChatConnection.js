import ActionCable from 'actioncable-js'

import {
  V2_API_BASE_URL,
  ACCESS_TOKEN_NAME,
  CLIENT_NAME,
} from '../../globals.js'

function ChatConnection(senderId, callback) {
  let access_token = localStorage.getItem(ACCESS_TOKEN_NAME)
  let client = localStorage.getItem(CLIENT_NAME)

  var wsUrl = 'ws://' + V2_API_BASE_URL + '/cable'
  wsUrl += '?access-token=' + access_token + '&client=' + client

  this.senderId = senderId
  this.callback = callback

  this.connection = ActionCable.createConsumer(wsUrl)
  this.roomConnections = []
}

ChatConnection.prototype.talk = function(message, roomId) {
  let roomConnObj = this.roomConnections.find(conn => conn.roomId === roomId)
  if (roomConnObj) {
    roomConnObj.conn.speak(message)
  } else {
    console.error('Error: Cannot find room connection')
  }
}

ChatConnection.prototype.openNewRoom = function(roomId) {
  if (roomId !== undefined) {
    this.roomConnections.push({roomId: roomId, conn: this.createRoomConnection(roomId)})
  }
}

ChatConnection.prototype.disconnect = function() {
  this.roomConnections.forEach(c => c.conn.consumer.connection.close())
}

ChatConnection.prototype.createRoomConnection = function(room_code) {
  var scope = this
  return this.connection.subscriptions.create({channel: 'RoomChannel', room_id: room_code, sender: scope.senderId, receiver: scope.receiverId}, {
    connected: function() {
      console.log('connected to RoomChannel. Room code: ' + room_code + '.')
    },
    disconnected: function() {},
    received: function(data) {
      if (data.participants.indexOf(scope.senderId) !== -1) {
        return scope.callback(data)
      }
    },
    speak: function(message) {
      return this.perform('speak', {
        room_id: room_code,
        message: message,
        sender:  scope.senderId,
        receiver: scope.receiverId
      })
    }
  })
}

export default ChatConnection