export default function LockedLevelBox({ title, plural, firstConditionTitle }: {
    title: string;
    plural: boolean;
    firstConditionTitle: string;
}) {
    return (
        <div className='locked-level-box'>
            <div className='level-title'>{title}</div>
            <div className='level-description'>解鎖條件：在{firstConditionTitle}{plural && '等'}關卡得到4星以上</div>
        </div>
    );
}
