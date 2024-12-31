function shareMessage() {
    if (navigator.share) {
        try {
            const shareData = {
                title: '2025년 TPC 말씀뽑기',
                text: '돌파의 한 해 되시길 축복합니다',
                url: window.location.href,
            };

            navigator.share(shareData)
                .then(() => console.log('공유 성공!'))
                .catch(error => console.error('공유 실패:', error.message));
        } catch (error) {
            console.error('공유 실패:', error.message);
        }
    } else {
        alert('해당 브라우저에서 Web Share API가 동작하지 않습니다.');
    }
}
