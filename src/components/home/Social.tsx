import Switch from "./Switch";

export default function Social() {
    return (
        <div className="home__social">
            <a href="https://www.credly.com/users/hmurauyou" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-amazon"></i>
            </a>
            <a href="https://leetcode.com/u/myumbr3lla" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className='bx bx-code-alt'></i>
            </a>
            <a href="https://interlink-chief.github.io/Herman" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-github-alt"></i>
            </a>

            <Switch />
        </div>
    );
}
