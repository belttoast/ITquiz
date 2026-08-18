import React from 'react';

function CharacterInfo() {
  return (
    <div className="character-container">
      {/* Center Character Image */}
      <div className="character-showcase">
        <img src="/Asa.png" alt="Asa Mitaka" className="character-hero-img" />
      </div>

      {/* Left Info Panel */}
      <div className="content-sidebar">
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
      </div>
    </div>
  );
}

export default CharacterInfo;
