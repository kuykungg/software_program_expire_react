class notify{
    constructor(data){
        this.id = data.id;
        this.notify_title = data.notify_title;
        this.notify_body = data.notify_body;
        this.notify_date = data.notify_date;
    }
}
module.exports = notify;