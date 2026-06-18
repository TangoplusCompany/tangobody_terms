export default function AdminPrivacyPage() {
  return (
    <div className="privacy-container" style={styles.container}>
      {/* 1. 메인 타이틀 부 */}
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>Tango Body 관리자 페이지 개인정보 처리방침</h1>
        <p style={styles.metaText}>시행일: 2026-06-18 | 버전: v1.0</p>
      </div>

      <hr style={styles.hr} />

      {/* 2. 방침 본문 부 */}
      <div style={styles.body}>
        <section style={styles.section}>
          <h2 style={styles.subTitle}>1. 개인정보 처리 목적</h2>
          <p style={styles.paragraph}>
            주식회사 탱고플러스(이하 “회사”)는 개인정보보호법 등 관련 법령에 따라 이용자의 개인정보를 보호하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위해 본 개인정보 처리방침을 수립 및 공개합니다.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subTitle}>2. 처리하는 개인정보 항목</h2>
          
          <div style={styles.nestedSection}>
            <h3 style={styles.nestedTitle}>[회원가입 및 계정 관리]</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>필수 항목: 이름, 이메일 주소, 회사명(센터명), 연락처, 로그인 인증 정보</li>
            </ul>
          </div>

          <div style={styles.nestedSection}>
            <h3 style={styles.nestedTitle}>[서비스 이용 과정에서 자동 수집]</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>접속 로그, IP 주소, 쿠키(Cookie), 브라우저 정보, 서비스 이용 기록</li>
            </ul>
          </div>

          <div style={styles.nestedSection}>
            <h3 style={styles.nestedTitle}>[관리자 페이지에서 처리·열람되는 제3자 데이터]</h3>
            <p style={{ ...styles.paragraph, fontSize: '13px', color: '#777', marginBottom: '4px' }}>
              ※ 본 항목은 회원이 위탁한 범위 내에서 시스템 보관 및 열람만 수행하는 민감정보입니다.
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>키오스크 측정 회원의 촬영 사진, 분석 영상, 신체 측정 정보(체형 데이터 일체)</li>
            </ul>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subTitle}>3. 개인정보의 처리 목적</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>관리자 회원가입 의사 확인 및 본인(사업자) 식별·인증</li>
            <li style={styles.listItem}>체형 측정 데이터 매핑 및 관리자 대시보드 서비스 제공</li>
            <li style={styles.listItem}>고객 문의 대응, 시스템 장애 처리 등 고객 지원 업무</li>
            <li style={styles.listItem}>불법 사용 방지, 비인가 접근 차단 등 대시보드 보안 관리</li>
            <li style={styles.listItem}>데이터 처리 속도 및 UI/UX 편의성 등 서비스 개선</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subTitle}>4. 개인정보의 보유 및 이용 기간</h2>
          <p style={styles.paragraph}>
            회사는 원칙적으로 개인정보 처리 목적이 달성되거나, <strong>이용자의 가입 해지(계정 삭제) 또는 서비스 계약 종료 시까지</strong> 개인정보를 보유 및 이용합니다. 단, 관계 법령에 의해 보존할 필요가 있는 경우 해당 기간 동안 안전하게 분리 보관합니다.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subTitle}>5. 개인정보 보호를 위한 기술적·관리적 보호조치</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>접근 권한 제한:</strong> 데이터베이스 및 개인정보 처리 시스템에 대한 접근 권한을 직무별로 차등 부여하고 철저히 통제합니다.</li>
            <li style={styles.listItem}><strong>데이터 암호화:</strong> 이용자의 주요 개인정보 및 신체 측정 민감 데이터는 전송 및 저장 시 암호화 기술을 적용합니다.</li>
            <li style={styles.listItem}><strong>접속 기록 보관:</strong> 개인정보 취급자의 접속 로그를 최소 1년 이상 보관하며, 위변조 방지 조치를 적용합니다.</li>
            <li style={styles.listItem}><strong>보안 시스템 운영:</strong> 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출을 막기 위해 주기적인 백신 업데이트 및 방화벽을 운영합니다.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subTitle}>6. 정보주체 및 법정대리인의 권리와 행사방법</h2>
          <p style={styles.paragraph}>
            이용자는 회사에 대해 언제든지 개인정보 열람 요구, 오류 등이 있을 경우 정정 요구, 삭제 요구, 처리 정지 요구 등의 권리를 행사할 수 있으며, 회사는 이에 대해 지체 없이 조치합니다.
          </p>
        </section>
      </div>
    </div>
  );
}

// 🎨 약관 프로젝트 공통 스타일 팩
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
    margin: '0 0 4px 0',
  },
  nestedSection: {
    marginBottom: '6px',
  },
  nestedTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#444',
    margin: '0 0 4px 0',
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