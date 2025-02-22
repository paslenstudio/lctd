const getTaskTitle = (): string => {
    const titleElement = document.title; // Пример, замените на актуальный селектор
    if (titleElement) {
        return titleElement.replace(' - LeetCode', '') || 'No title found';
    }
    return 'No title element found';
};

const taskTitle = getTaskTitle();
chrome.runtime.sendMessage({ type: 'TASK_TITLE', title: taskTitle });
