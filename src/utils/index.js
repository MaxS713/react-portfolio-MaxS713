function msToTime(milliseconds) {
    // Convert milliseconds to seconds
    let seconds = Math.floor(milliseconds / 1000);

    // Calculate years
    let years = Math.floor(seconds / (60 * 60 * 24 * 365));
    seconds -= years * (60 * 60 * 24 * 365);

    // Calculate days
    let days = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days * (60 * 60 * 24);

    // Calculate hours
    let hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * (60 * 60);

    // Calculate minutes
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    // Calculate remaining seconds
    seconds = Math.floor(seconds);

    // Prepare the readable format
    let readableTime = '';
    readableTime += years + ' year' + (years !== 1 ? 's' : '') + ' ';
    readableTime += days + ' day' + (days !== 1 ? 's' : '') + ' ';
    readableTime += hours + ' hour' + (hours !== 1 ? 's' : '') + ' ';
    readableTime += minutes + ' minute' + (minutes !== 1 ? 's' : '') + ' ';
    readableTime += seconds + ' second' + (seconds !== 1 ? 's' : '');
    return readableTime.trim();
}

export { msToTime }
