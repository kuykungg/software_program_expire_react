class Software{
    constructor(data) {
        this.id = data.id;
        this.program_name = data.program_name;
        this.program_vendor = data.program_vendor;
        this.description = data.description;
        this.license_key = data.license_key;
        this.seat_max = data.seat_max;
        this.seat_using = data.seat_using;
        this.seat_left = data.seat_left;
        this.is_active = data.is_active;
        this.license_start_at = data.license_start_at;
        this.license_expire_at = data.license_expire_at;
    }
}