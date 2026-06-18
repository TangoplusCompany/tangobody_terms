import { useState, useEffect } from 'react';
import AdminTerms from './app/admin_page/terms/page';
import AdminPrivacy from './app/admin_page/privacy/page';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // 주소 경로에 따라 보여줄 컴포넌트 분기 처리
  const routes: Record<string, React.JSX.Element> = {
    '/admin_page/privacy': <AdminPrivacy />,
    '/admin_page/terms': <AdminTerms />,
    
  };

  // 등록된 경로가 없으면 기본값(default)으로 AdminTerms(이용약관)를 출력
  return routes[path] || <AdminTerms />;
  
}