var task_title = '';

function openNewTab(myurl: string): void {
    chrome.tabs.create({ url: myurl });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'TASK_TITLE') {
        console.log('Received task title from content script:', message.title);
        task_title = message.title;
    }
});

chrome.action.onClicked.addListener((tab) => {
    const url = `https://todoist.com/add?content=${task_title}&priority=3`;
    if (task_title.length > 0) {
        openNewTab(url);
    }
});
