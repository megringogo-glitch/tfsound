// ① ボタン要素を取得
const correctButton = document.getElementById('correct-button');
const incorrectButton = document.getElementById('incorrect-button');

// ② Audioオブジェクトを作成（音声をメモリにロード）
// ファイル名: seikai.mp3 と machigai.mp3 があると仮定します。
const correctSound = new Audio('seikai.m4a'); 
const incorrectSound = new Audio('machigai.mp3');

/**
 * 音声を再生する関数
 * @param {HTMLAudioElement} audioObject - 再生したいAudioオブジェクト
 */
function playSound(audioObject) {
    // 💡 注意点: 再生中にボタンが再度押された場合、
    // 既に再生中の音声を停止してから最初から再生し直す処理が一般的です。
    audioObject.pause();
    audioObject.currentTime = 0; // 再生位置を最初に戻す
    
    audioObject.play()
        .catch(error => {
            // 自動再生ポリシーなどの影響で再生が失敗することがあるため、
            // エラーをコンソールに出力しておくとデバッグに役立ちます。
            console.error("音声の再生に失敗しました:", error);
        });
}

// ③ イベントリスナーを設定
// 正解ボタンがクリックされたら正解音を再生
correctButton.addEventListener('click', () => {
    playSound(correctSound);
});

// 間違いボタンがクリックされたら間違い音を再生
incorrectButton.addEventListener('click', () => {
    playSound(incorrectSound);
});
