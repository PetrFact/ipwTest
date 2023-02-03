import React from 'react';
import '../styles/styles.css'

function Aboutpage(props) {
    return (
        <div className='aboutLayout'>
            <h1>Разрабы</h1>
            <div className={true ? 'profileGroup active' : 'profileGroup'}>
                <div className='profileBlock profileOne'>
                    <div className='personBlock'>
                        <div className='personInfo'>
                            <h2 className='name'>Родион</h2>
                            <h2 className='surname'>Жубатыров</h2>
                        </div>
                        <div className='avatar'></div>
                    </div>
                    <div className='profileGrLink'>
                        <h2>VK: <a href='https://vk.com/zzzhubatyrov' target="_blank noopener noreferrer">https://vk.com/zzzhubatyrov</a></h2>
                        <h2>GitHub: <a href='https://github.com/PetrFact' target="_blank noopener noreferrer">https://github.com/PetrFact</a></h2>
                    </div> {/* Profile Group Link */}
                </div>
                <div className='profileBlock profileTwo'>
                    <div className='personBlock'>
                        <div className='personInfo'>
                            <h2 className='name'>Богдан</h2>
                            <h2 className='surname'>Шайхлисламов</h2>
                        </div>
                        <div className='avatar'></div>
                    </div>
                    <div className='profileGrLink'>
                        <h2>VK: <a href='https://vk.com/shaihlislamoff' target="_blank noopener noreferrer">https://vk.com/shaihlislamoff</a></h2>
                        <h2>GitHub: <a href='https://github.com/sleepwallking' target="_blank noopener noreferrer">https://github.com/sleepwallking</a></h2>
                    </div> {/* Profile Group Link */}
                </div>
            </div>
            {/* <a href='https://vk.com/zzzhubatyrov' target="_blank noopener noreferrer">https://vk.com/zzzhubatyrov</a><br/>
            <a href='https://vk.com/shaihlislamoff' target="_blank noopener noreferrer">https://vk.com/shaihlislamoff</a> */}
        </div>
    );
}

export default Aboutpage;