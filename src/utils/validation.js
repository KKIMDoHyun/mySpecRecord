function validationBlank(value) {
    if (value.lenth == 0) {
        return false;
    } else {
        return true;
    }
}

export { validationBlank };