import React, { useState } from 'react';
import asaImg from '../assets/asa.png';
import yoruImg from '../assets/yoru.jpg';

function CharacterInfo() {
  const [character, setCharacter] = useState('asa'); // 'asa' or 'yoru'

  const toggleCharacter = () => {
    setCharacter((prev) => (prev === 'asa' ? 'yoru' : 'asa'));
  };

  return (
    <>
      {/* Pure black background for Yoru mode */}
      <div className={`yoru-bg ${character === 'yoru' ? 'active' : ''}`}></div>

      <div className={`character-container ${character === 'yoru' ? 'yoru-mode' : ''}`}>
        
        {/* Center/Side Character Image */}
        <div className="character-showcase">
          <img 
            src={character === 'asa' ? asaImg : yoruImg} 
            alt={character === 'asa' ? 'Asa Mitaka' : 'Yoru'} 
            className="character-hero-img" 
          />
        </div>

        {/* Info Panel */}
        <div className="content-sidebar">
          {character === 'asa' ? (
            <>
              <h1 className="character-name">Asa Mitaka</h1>
              <p className="character-subtitle">Host of the War Devil</p>
              
              <div className="scroll-area">
                <section className="info-section">
                  <h2>ภูมิหลังและภาพรวม</h2>
                  <div className="section-body">
                    <p>เธอเป็นนักเรียนมัธยมปลายที่ค่อนข้างแยกตัวจากสังคม และศึกษาอยู่ที่โรงเรียน Fourth East High School</p>
                    <p>แม่ของเธอถูกปีศาจไต้ฝุ่นสังหารตั้งแต่เธอยังเด็ก ทำให้เธอมีความแค้นอย่างลึกซึ้งต่อปีศาจ</p>
                    <p>หลังจากถูกเพื่อนร่วมชั้นที่ถูกปีศาจความยุติธรรมเข้าสิงสังหาร เธอได้รับการชุบชีวิตขึ้นมาอีกครั้งโดยโยรุ ปีศาจสงคราม</p>
                    <p>เธอแบ่งปันร่างกายร่วมกับโยรุในฐานะโฮสต์ของปีศาจที่ยังมีชีวิตอยู่ ซึ่งเป็นกรณีที่พบได้ยาก และพยายามร่วมมือกับโยรุเพื่อทวงคืนอิสรภาพของตัวเอง</p>
                  </div>
                </section>

                <section className="info-section">
                  <h2>บุคลิกและลักษณะนิสัย</h2>
                  <div className="section-body">
                    <p>เธอมีปัญหาเรื่องความมั่นใจในตัวเองต่ำ ความรู้สึกผิดอย่างรุนแรง และความซุ่มซ่ามในการเข้าสังคม</p>
                    <p>เธอมักแสดงท่าทีตั้งการ์ดหรือประชดประชันเพื่อปกปิดความกลัวอย่างลึกซึ้งว่าจะถูกปฏิเสธ</p>
                    <p>ความสัมพันธ์ระหว่างเธอกับเด็นจิเป็นหนึ่งในประเด็นสำคัญของภาค 2 โดยความสัมพันธ์ของทั้งคู่มีทั้งผู้ที่มองว่าเข้าถึงง่ายและน่าสนใจ และผู้ที่รู้สึกว่าเรื่องราวของเธอถูกลดบทบาทลงในช่วงเนื้อเรื่องภายหลัง</p>
                  </div>
                </section>

                <section className="info-section">
                  <h2>พลังและความสามารถ</h2>
                  <div className="section-body">
                    <p><span className="highlight-text">การสร้างอาวุธ (Weapon Creation):</span> เธอสามารถเปลี่ยนสิ่งใดก็ตามที่เป็นของเธอ หรือสิ่งของและบุคคลที่เธอรู้สึกถึงความเป็นเจ้าของหรือมีความผูกพันด้วย ให้กลายเป็นอาวุธทรงพลังได้</p>
                    <p><span className="highlight-text">การอยู่ร่วมกับปีศาจสงคราม (War Devil Symbiosis):</span> เธอได้รับศักยภาพในการต่อสู้ที่เพิ่มขึ้น รวมถึงคุณสมบัติในการเอาชีวิตรอดที่คล้ายกับมนุษย์ลูกผสมผ่านพลังของโยรุ</p>
                  </div>
                </section>
              </div>
            </>
          ) : (
            <>
              <h1 className="character-name yoru-title">YORU</h1>
              <p className="character-subtitle yoru-subtitle">THE WAR DEVIL</p>
              
              <div className="scroll-area">
                <section className="info-section">
                  <h2>อัตลักษณ์และภูมิหลัง</h2>
                  <div className="section-body">
                    <p><span className="highlight-text">ธรรมชาติ:</span> เธอเป็นตัวแทนดั้งเดิมของสงคราม และเป็นหนึ่งในสี่จตุรอาชาแห่งวันสิ้นโลก ทำให้เธอเป็นพี่น้องกับมาคิมะ (ปีศาจควบคุม), ปีศาจความอดอยาก และปีศาจความตาย</p>
                    <p><span className="highlight-text">ร่างโฮสต์:</span> เธอเข้ายึดครองร่างของนักเรียนมัธยมปลายชื่อ อาสะ มิตากะ ในฐานะร่างฟีนด์ (Fiend)</p>
                    <p><span className="highlight-text">รูปลักษณ์:</span> เมื่อโยรุเข้าควบคุมร่างของอาสะ จะปรากฏรอยแผลเป็นที่เป็นเอกลักษณ์บริเวณด้านข้างใบหน้าและจมูก</p>
                  </div>
                </section>

                <section className="info-section">
                  <h2>พลังและความสามารถ</h2>
                  <div className="section-body">
                    <p><span className="highlight-text">การเปลี่ยนสิ่งของให้เป็นอาวุธ (Weapon Transmutation):</span> เธอสามารถเปลี่ยนสิ่งใดก็ตามที่เธอรู้สึกถึงความเป็นเจ้าของหรือมีความผูกพันอย่างมากให้กลายเป็นอาวุธทรงพลัง โดยความแข็งแกร่งของอาวุธจะเพิ่มขึ้นตามระดับความผูกพันส่วนตัวหรือความรู้สึกผิดที่เธอมีต่อสิ่งนั้น</p>
                    <p><span className="highlight-text">เนื้อและการฟื้นฟู (Flesh & Regeneration):</span> เธอสามารถรักษาบาดแผลและฟื้นฟูร่างกายได้ด้วยการบริโภคเลือด เช่นเดียวกับปีศาจและฟีนด์ประเภทอื่น</p>
                    <p><span className="highlight-text">สภาวะอ่อนแอลง (Weakened State):</span> ก่อนหน้านี้เธอเคยต่อสู้กับเชนซอว์แมน (โปจิตะ) ในขุมนรกเคียงข้างพี่น้องของเธอ หลังจากนั้นเธอถูกกินไปบางส่วน ทำให้สูญเสียแนวคิดบางอย่าง เช่น อาวุธนิวเคลียร์ และพลังของเธอลดลงอย่างมาก</p>
                  </div>
                </section>

                <section className="info-section">
                  <h2>เป้าหมายและบุคลิก</h2>
                  <div className="section-body">
                    <p><span className="highlight-text">เป้าหมายหลัก:</span> เป้าหมายหลักของเธอคือการตามล่าและเอาชนะเชนซอว์แมน เพื่อทำให้มนุษยชาติกลับมาเกรงกลัวสงครามอีกครั้ง โดยเฉพาะการนำอาวุธนิวเคลียร์กลับคืนมา</p>
                    <p><span className="highlight-text">พฤติกรรม:</span> โดยทั่วไปโยรุมีแรงขับเคลื่อนจากความหยิ่งทะนง ความต้องการการยอมรับแบบเด็ก ๆ และความกลัวอย่างลึกซึ้งว่าจะถูกลบหายไปจากการมีอยู่ มากกว่าการเป็นผู้บงการที่เย็นชาและคำนวณทุกอย่าง</p>
                    <p><span className="highlight-text">ความสัมพันธ์กับอาสะ:</span> เธออาศัยอยู่ในร่างเดียวกับอาสะ และมักทะเลาะ โต้เถียง หรือสร้างสถานการณ์ที่น่าอึดอัดร่วมกัน เช่น การพยายามเปลี่ยนเด็นจิให้กลายเป็นอาวุธ</p>
                  </div>
                </section>
              </div>
            </>
          )}
        </div>

        {/* Switch Button */}
        <button className="switch-btn" onClick={toggleCharacter}>
          {character === 'asa' ? 'SWITCH TO YORU' : 'SWITCH TO ASA'}
        </button>

      </div>
    </>
  );
}

export default CharacterInfo;
