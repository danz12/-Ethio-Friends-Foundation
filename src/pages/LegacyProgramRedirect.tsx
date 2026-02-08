import { Navigate, useParams } from 'react-router-dom';

const LegacyProgramRedirect = () => {
  const { programId } = useParams();

  return <Navigate to={programId ? `/programs/${programId}` : '/programs'} replace />;
};

export default LegacyProgramRedirect;

