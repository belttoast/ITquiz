import React from 'react';

function CharacterInfo() {
  return (
    <div className="character-layout glass-panel">
      <div className="info-panel">
        <h1 className="title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Asa Mitaka</h1>
        
        <div className="section-block">
          <h2 className="section-title">ภูมิหลังและภาพรวม</h2>
          <div className="section-content">
            <p>เธอเป็นนักเรียนมัธยมปลายที่ค่อนข้างแยกตัวจากสังคม และศึกษาอยู่ที่โรงเรียน Fourth East High School</p>
            <p>แม่ของเธอถูกปีศาจไต้ฝุ่นสังหารตั้งแต่เธอยังเด็ก ทำให้เธอมีความแค้นอย่างลึกซึ้งต่อปีศาจ</p>
            <p>หลังจากถูกเพื่อนร่วมชั้นที่ถูกปีศาจความยุติธรรมเข้าสิงสังหาร เธอได้รับการชุบชีวิตขึ้นมาอีกครั้งโดยโยรุ ปีศาจสงคราม</p>
            <p>เธอแบ่งปันร่างกายร่วมกับโยรุในฐานะโฮสต์ของปีศาจที่ยังมีชีวิตอยู่ ซึ่งเป็นกรณีที่พบได้ยาก และพยายามร่วมมือกับโยรุเพื่อทวงคืนอิสรภาพของตัวเอง</p>
          </div>
        </div>

        <div className="section-block">
          <h2 className="section-title">บุคลิกและลักษณะนิสัย</h2>
          <div className="section-content">
            <p>เธอมีปัญหาเรื่องความมั่นใจในตัวเองต่ำ ความรู้สึกผิดอย่างรุนแรง และความซุ่มซ่ามในการเข้าสังคม</p>
            <p>เธอมักแสดงท่าทีตั้งการ์ดหรือประชดประชันเพื่อปกปิดความกลัวอย่างลึกซึ้งว่าจะถูกปฏิเสธ</p>
            <p>ความสัมพันธ์ระหว่างเธอกับเด็นจิเป็นหนึ่งในประเด็นสำคัญของภาค 2 โดยความสัมพันธ์ของทั้งคู่มีทั้งผู้ที่มองว่าเข้าถึงง่ายและน่าสนใจ และผู้ที่รู้สึกว่าเรื่องราวของเธอถูกลดบทบาทลงในช่วงเนื้อเรื่องภายหลัง</p>
          </div>
        </div>

        <div className="section-block">
          <h2 className="section-title">พลังและความสามารถ</h2>
          <div className="section-content">
            <p><strong>การสร้างอาวุธ (Weapon Creation):</strong> เธอสามารถเปลี่ยนสิ่งใดก็ตามที่เป็นของเธอ หรือสิ่งของและบุคคลที่เธอรู้สึกถึงความเป็นเจ้าของหรือมีความผูกพันด้วย ให้กลายเป็นอาวุธทรงพลังได้</p>
            <p><strong>การอยู่ร่วมกับปีศาจสงคราม (War Devil Symbiosis):</strong> เธอได้รับศักยภาพในการต่อสู้ที่เพิ่มขึ้น รวมถึงคุณสมบัติในการเอาชีวิตรอดที่คล้ายกับมนุษย์ลูกผสมผ่านพลังของโยรุ</p>
          </div>
        </div>
      </div>
      
      <div className="image-panel">
        <img src="/asa.png" alt="Asa Mitaka" className="character-image" />
      </div>
    </div>
  );
}

export default CharacterInfo;
