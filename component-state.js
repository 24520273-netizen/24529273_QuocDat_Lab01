const loadingState = document.querySelector('.loading-state');
const liveState = document.querySelector('.live-state');
const emptyState = document.querySelector('.empty-state');
const errorState = document.querySelector('.error-state');
const retryButton = document.querySelector('.retry-button');

function showState(state) {
    loadingState.hidden = true;
    liveState.hidden = true;
    emptyState.hidden = true;
    errorState.hidden = true;

    state.hidden = false;
}

retryButton.addEventListener('click', () => {
    showState(loadingState);

    setTimeout(() => {
        showState(liveState);
    }, 1500);
});

showState(errorState);