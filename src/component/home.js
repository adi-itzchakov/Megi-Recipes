import React, { Component } from 'react';
import './home.css';
import PinkImg from '../pictures/pink.png';
import Megi from '../pictures/Megi.png';

class Home extends Component{
    render(){
        return(
            <div>
                <div className="all">
                    <div>
                    <img id="PinkImg" src={PinkImg} alt="PinkImg"/>
                        <p className="headline1">:המטבח הבוכרי</p>
                        <hr className="hr1"/>
                    </div>
                    <p className="AboutTheFood">
                    המטבח הבוכרי מציע אוכל מגוון וטעים שעומד במרכז התרבות הבוכרית והוא מבוסס על מרכיבים פשוטים. בבתים הבוכרים שמים דגש רב בכיבוד האורחים באוכל הבוכרי .
                    המטבח הבוכרי מאופיין באוכל עם שימוש רב באורז, בשר וירקות, כשהמאכל הלאומי שלהם, הנקרא "אושפלו" (או "אושפלוב"), מרכז את כל המרכיבים האלו לכדי מנה מצוינת של גזר, בצל, עוף, בשר ואורז
                    בואו ללמוד איך להכין אוכל בוכרי אמיתי, בהכנה ביתית וטעימה במיוחד
                    </p>
                </div>
                <div className="all">
                    <div>
                    <p className="headline2">:מאכלים אופייניים</p>
                        <hr className="hr2"/>
                    </div>
                        <ul>
                            <li>
                            גודג'גיז'דה- שם של מאפה בוכרי מסורתי, העשוי מבצק ממולא בבצל ובשר חתוך לקוביות קטנות מאוד 
                            </li>
                            <li>
                                החמין- גם במטבח יהודי בוכרה,כבכל מטבח יהודי קיים החמין, נקרא אוסובו ומכיל בעיקר אורז
                            </li>
                            <li>
                                מנטו- אחד המאכלים הנפוצים אצל הבוכרים, עשוי מכיס בצק בתוכו בצר קצוץ ובצל. המנטו מתבשל על סיר אדים כ-45 דקות
                            </li>
                            <li>
                                באחש- מאופיין באורז הירוק שלו ומורכב בעיקר מאורז, בשר, תבלינים וכוסברה (ניתן להוסיף גם שמיר ופטרוזיליה)
                            </li>
                            <li>
                                מרק כיסונים הנקרא דושפרה- מרק בשר, ירקות, גרגירי חומוס, עם כיסונים ממולאים בשר טחון
                            </li>
                            <li>
                                נישאל'ה- ממתק סמיך, נוהגים לאכול אותו בצאת פסח עם פיתות/לאפות
                            </li>
                        </ul>
                </div>
                <div className="all">
                    <div>
                        <img id="PinkImg" src={PinkImg} alt="PinkImg" style={{height:500}}/>
                        <p className="headline3">...קצת עלי</p>
                        <hr className="hr3"/>
                    </div>
                    <p className="AboutMe">
                        שמי מרגריטה או בקיצור מגי, מנהלת אופנת נשים במשביר החדש לצרכן.  בת 63, נשואה לבוריס ואמא לחמישה ילדים. נולדתי
                        בטשקנט בשנות ה-50,עליתי לארץ ישראל בשנות ה-70. את המסע התחלתי עוד בילדותי כששהיתי רבות במטבח עם אימי ז"ל. למדתי את רזי המקצוע של המטבח הבוכרי. כיום מבשלת 
                        מאכלים מכל הסוגים, אוהבת להשקיע ולהינות מהטעמים המדהימים
                    </p>
                    <img id="Me" src={Megi} alt="Megi" />
                </div>
            </div>
        )
    }
}
export default Home;