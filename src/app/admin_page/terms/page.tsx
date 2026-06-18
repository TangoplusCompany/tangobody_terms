export default function AdminTermsPage() {
  return (
    <div className="terms-container" style={styles.container}>
      {/* 1. 메인 타이틀 부 */}
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>Tango Body 관리자 페이지 서비스 이용약관</h1>
        <p style={styles.metaText}>시행일: 2026-06-18 | 버전: v1.0</p>
      </div>

      <hr style={styles.hr} />

      {/* 2. 약관 본문 부 */}
      <div style={styles.body}>
        <section style={styles.section}>
          <h2 style={styles.subTitle}>제1조 (목적)</h2>
          <p style={styles.paragraph}>
            본 약관은 주식회사 탱고플러스(이하 “회사”)가 제공하는 체형 측정 키오스크 관리자 페이지 서비스(이하 “서비스”)의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subTitle}>제2조 (정의)</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>“서비스”란 회사가 제공하는 관리자 페이지 및 관련 시스템 일체를 의미합니다.</li>
            <li style={styles.listItem}>“회원”이란 본 약관에 동의하고 서비스에 가입하여 서비스를 이용하는 센터, 병의원, 기업 등의 사업자 또는 지정 관리자를 의미합니다.</li>
            <li style={styles.listItem}>“측정 데이터”란 키오스크를 통해 수집된 사진, 영상, 신체 측정 정보 및 관련 데이터를 의미합니다.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subTitle}>제3조 (서비스 내용)</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>측정 데이터 조회 및 회원별 이력 모니터링</li>
            <li style={styles.listItem}>체형 측정 결과 관리 및 리포트 열람</li>
            <li style={styles.listItem}>서비스 내 제공되는 이미지 다운로드 및 가공</li>
            <li style={styles.listItem}>기타 시스템이 제공하는 부가 기능 일체</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subTitle}>제4조 (계정 관리)</h2>
          <p style={styles.paragraph}>
            회원은 서비스 접근을 위한 계정 및 비밀번호를 안전하게 관리하여야 하며, 비밀번호 유출, 계정 무단 공유 또는 관리 소홀로 인하여 발생하는 모든 보안 사고 및 법적 책임은 회원에게 귀속됩니다.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subTitle}>제5조 (측정 데이터 이용 제한)</h2>
          <p style={styles.paragraph}>
            회원은 측정 데이터를 계약 목적 범위 내에서만 정당하게 이용하여야 하며, 회사의 사전 서면 승인 또는 정보주체(최종 이용자)의 별도 동의 없이 본 계약 목적 외의 용도로 이용하거나 제3자에게 노출할 수 없습니다.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subTitle}>제6조 (금지행위)</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>측정 데이터 및 민감정보의 무단 복제, 임의 저장 또는 무분별한 외부 반출</li>
            <li style={styles.listItem}>취득한 임직원 및 회원의 데이터를 제3자에게 유상 판매, 양도, 대여 또는 공유하는 행위</li>
            <li style={styles.listItem}>기타 개인정보 보호법 등 관계 법령에 위배되는 일체의 데이터 오남용 행위</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subTitle}>제7조 (이미지 다운로드 및 반출 제한)</h2>
          <p style={styles.paragraph}>
            회사는 서비스 운영상 필요한 범위 내에서 회원에게 분석 이미지 다운로드 기능을 제공할 수 있습니다.
          </p>
          <p style={styles.paragraph}>
            제공되는 다운로드 권한은 업무 수행 및 계약 목적 달성을 위한 제한적이고 일시적인 이용 권한일 뿐이며, 데이터 자체에 대한 소유권이나 무제한적 자율 사용권이 회원에게 이전되는 것을 의미하지 않습니다.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subTitle}>제8조 (책임 부담)</h2>
          <p style={styles.paragraph}>
            회원 또는 회원 소속 조직의 임직원, 관리자, 계정 사용자의 고의 또는 과실로 인한 데이터 유출, 무단 반출, 복제, 목적 외 사용이 발생하여 정보주체(최종 이용자) 또는 제3자에게 손해가 발생한 경우, <strong>이에 대한 모든 법적·행정적 책임은 회원 또는 해당 소속 조직이 전적으로 부담합니다.</strong>
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subTitle}>제9조 (회사의 책임 제한)</h2>
          <p style={styles.paragraph}>
            회사는 본 서비스를 제공함에 있어 관계 법령이 요구하는 통상적인 수준의 기술적·관리적 보호조치를 충실히 이행합니다. 다만, 회원 측의 계정 관리 소홀, 내부 직원에 의한 무단 유출, 고의적인 다운로드 및 외부 반출 등 회사의 통제 범위를 벗어난 회원 귀책사유에 의한 사고에 대해서는 회사의 책임이 면제됩니다.
          </p>
        </section>
      </div>
    </div>
  );
}

// 🎨 가독성 극대화를 위한 스타일 구조 정의
const styles: Record<string, React.CSSProperties> = {
  container: {
    textAlign: 'left',
    color: 'var(--text, #333)',
    maxWidth: '720px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '20px',
  },
  mainTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: 'var(--text-h, #111)',
    marginBottom: '8px',
  },
  metaText: {
    fontSize: '13px',
    color: '#888',
    margin: 0,
  },
  hr: {
    border: 'none',
    borderTop: '1px solid var(--border, #e5e4e7)',
    margin: '20px 0 30px 0',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  subTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: 'var(--text-h, #111)',
    margin: 0,
  },
  paragraph: {
    fontSize: '14px',
    lineHeight: '1.6',
    margin: 0,
    color: 'var(--text, #555)',
  },
  list: {
    margin: 0,
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  listItem: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: 'var(--text, #555)',
  },
};