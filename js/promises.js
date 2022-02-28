"use strict";

const baseURL = 'https://api.github.com';

function getUserLastPushEvent(username) {
    return fetch(baseURL + '/users/' + username + '/events/public', {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
        .then(res => res.json())
        .then(events => {
            for (let event of events) {
                if (event.type === 'PushEvent') {
                    return event.created_at;
                }
            }
        });
}

getUserLastPushEvent('topfunky').then(lastEventDate => document.body.innerHTML = `${lastEventDate}`);

const wait = milliseconds => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(milliseconds)
        }, milliseconds)
    })
}

wait(5000).then((ms) => console.log(`You'll see this after ${ms/1000} seconds`));
