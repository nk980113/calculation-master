export default function LevelMenuButton({ back }: {
    back(): void;
}) {
    return <button className='level-button' onClick={back}>返回關卡首頁</button>;
}
