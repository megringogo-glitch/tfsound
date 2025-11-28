// ① ボタン要素を取得
const correctButton = document.getElementById('correct-button');
const incorrectButton = document.getElementById('incorrect-button');

// ② Audioオブジェクトを作成（音声をメモリにロード）
// ファイル名: seikai.mp3 と machigai.mp3 があると仮定します。
const correctSoundFiles = [
    'voice/seikai-Tanji.m4a',
    'voice/seikai-Nakane.m4a',
    'voice/seikai-Fujimoto.m4a',
    'voice/seikai-Sugimoto.m4a',
    'voice/seikai-Akutsu.m4a',
    'voice/seikai-Ohashi.m4a',
    'voice/seikai.m4a'
]; 
const incorrectSoundFiles = [
    'voice/hazure-Tanji.m4a',
    'voice/hazure-Nakane.m4a',
    'voice/hazure-iimura1.m4a',
    'voice/hazure-iimura2.m4a',
    'voice/hazure-iimura3.m4a',
    'voice/hazure-Fujimoto.m4a',
    'voice/hazure-Sugimoto.m4a',
    'voice/hazure-Usami.m4a',       
    'voice/hazure-Ohashi.m4a',
    'voice/hazure-Usami.m4a',       
    'voice/hazure-Akutsu.m4a',
    'voice/hazure.m4a'
];

/**
 * 音声を再生する関数
 * @param {string} soundFile - 再生したい音声ファイルのパス
 */
function playSound(soundFile) {
    //再生時に新しいAudioオブジェクトを作成
    const audioObject = new Audio(soundFile);
    
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

//ランダムな音を選ぶ関数
function getRandomSoundFile(fileList){
    const randomIndex = Math.floor(Math.random() * fileList.length);
    return fileList[randomIndex];
}

// ③ イベントリスナーを設定
// 正解ボタンがクリックされたら正解音を再生
correctButton.addEventListener('click', () => {
    const randomFile = getRandomSoundFile(correctSoundFiles);
    playSound(randomFile);
});

// 間違いボタンがクリックされたら間違い音を再生
incorrectButton.addEventListener('click', () => {
    const randomFile = getRandomSoundFile(incorrectSoundFiles);
    playSound(randomFile);
});
