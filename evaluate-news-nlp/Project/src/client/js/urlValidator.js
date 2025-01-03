function validateURL(inputText) {
    const urlPattern = /^(https?:\/\/)?(www\.)?[\w-]+\.\w+([\/\w-]*)*\/?$/;
    return urlPattern.test(inputText);
}

export { validateURL };
   