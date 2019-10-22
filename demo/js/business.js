const userOneNotificationContainer = document
    .querySelector("#user-one-notification-container");
const userTwoNotificationContainer = document
    .querySelector("#user-two-notification-container");
const ERROR_PREFIX = "error: ";

function appendContainer(element, text, isError) {
    element.value = element.value
        + (element.value ? "\n" : "")
        + (isError ? "✖ " : "✔ ")
        + (isError ? ERROR_PREFIX : '')
        + text;
}

function appendUserOneContainer(text, isError) {
    appendContainer(userOneNotificationContainer, text, isError);
}

function appendUserTwoContainer(text, isError) {
    appendContainer(userTwoNotificationContainer, text, isError);
}

function beautify(object) {
    return JSON.stringify(object, null, "\t");
}

function start() {
    const clientUserOne = new TurmsClient('ws://localhost:9510');
    const clientUserTwo = new TurmsClient('ws://localhost:9510');
    const USER_ONE_ID = 1;
    const USER_TWO_ID = 2;
    clientUserOne.driver.onClose = (wasLogged, error) => {
        if (wasLogged) {
            appendUserOneContainer('onClose: wasLogged = ' + wasLogged);
            if (error) {
                appendUserOneContainer(error, true);
            } else {
                appendUserOneContainer('onClose: bye bye');
            }
        }
    };
    clientUserOne.driver.onMessage = (response) => {
        if (response.notification) {
            appendUserOneContainer('onMessage: Receive a notification from other users or server: ' + beautify(response));
        }
    };
    clientUserTwo.driver.onClose = (wasLogged, error) => {
        if (wasLogged) {
            appendUserTwoContainer('onClose: wasLogged = ' + wasLogged);
            if (error) {
                appendUserTwoContainer(error, true);
            } else {
                appendUserTwoContainer('onClose: bye bye');
            }
        }
    };
    clientUserTwo.driver.onMessage = (response) => {
        if (response.notification) {
            appendUserTwoContainer('onMessage: Receive a notification from other users or server: ' + beautify(response));
        }
    };
    return Promise.all([
        clientUserOne.userService.login(USER_ONE_ID, '123'),
        clientUserTwo.userService.login(USER_TWO_ID, '123'),
    ])
        .then(() => {
                appendUserOneContainer('login: Two users have logged in');
                appendUserTwoContainer('login: Two users have logged in');
                clientUserOne.messageService.queryPendingMessagesWithTotal(1)
                    .then(messages => {
                        appendUserOneContainer('Offline messages: ' + beautify(messages));
                    })
                    .catch(error => {
                        if (error && error.code === 2001) {
                            appendUserOneContainer('No offline message');
                        }
                    });
                clientUserOne.messageService.sendMessage(
                    "PRIVATE",
                    USER_TWO_ID,
                    new Date(),
                    "Hello Turms, My userId is " + USER_ONE_ID,
                    null,
                    30)
                    .then(id => {
                        appendUserOneContainer('message ' + id + ' has been sent');
                    })
                    .catch(error => {
                        appendUserOneContainer('failed to send message: ' + beautify(error), true);
                    });
                clientUserOne.groupService.createGroup(
                    'Turms Developers Group',
                    'This is a group for the developers who are interested in Turms',
                    'nope',
                    null,
                    null)
                    .then(id => {
                        appendUserOneContainer('group ' + id + ' has been created');
                    })
                    .catch(error => {
                        appendUserOneContainer('failed to create group: ' + beautify(error), true);
                    });
                clientUserTwo.messageService.queryPendingMessagesWithTotal(1)
                    .then(messages => {
                        appendUserTwoContainer('Offline messages: ' + beautify(messages));
                    })
                    .catch(error => {
                        if (error && error.code === 2001) {
                            appendUserTwoContainer('No offline message');
                        }
                    });
                clientUserTwo.messageService.sendMessage(
                    "PRIVATE",
                    USER_ONE_ID,
                    new Date(),
                    "Hello Community, My userId is " + USER_TWO_ID,
                    null,
                    30)
                    .then(id => {
                        appendUserTwoContainer('message ' + id + ' has been sent');
                    })
                    .catch(error => {
                        appendUserTwoContainer('failed to send message: ' + beautify(error), true);
                    });
            }
        )
        .catch(reason => {
            appendUserOneContainer('Failed to log in' + beautify(reason), true);
            appendUserTwoContainer('Failed to log in' + beautify(reason), true);
        });
}