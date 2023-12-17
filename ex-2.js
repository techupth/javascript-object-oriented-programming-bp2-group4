class Notification {
    constructor(Notification, createdTime, content, receiver){
        this.Notification = Notification;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(){
        console.log(`Notification has been sent to ${this.receiver}`)
    }
 }

class EmailNotification extends Notification{
    constructor(Notification, createdTime, content, receiver){
        super(Notification, createdTime, content, receiver);
    }
 }

class SMSNotification extends Notification {
    constructor(Notification, createdTime, content, receiver){
        super(Notification, createdTime, content, receiver);
    }
 }

 const emailNoti = new EmailNotification("1", "2023-01-01", "Hello, this is an email", "john@example.com");
 const smsNoti = new SMSNotification("2", "2023-01-02", "Hello, this is an SMS", "1234567890");

emailNoti.send();
smsNoti.send();
