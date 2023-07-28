export default function LevelMenu({ setter }: {
    setter(value: 1 | 2): void;
}) {
    return (
        <div>
            <h2>首頁</h2>
            <button className='level-button' onClick={() => setter(1)}>教學</button>
            <button className='level-button' onClick={() => setter(2)}>開始遊戲</button>
        </div>
    );
}
