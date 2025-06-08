
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const AuthButton = () => {
  const { user, signOut } = useAuth();

  if (user) {
    return (
      <Button onClick={signOut} variant="outline">
        Sign Out
      </Button>
    );
  }

  return (
    <Link to="/auth">
      <Button variant="outline">
        Sign In
      </Button>
    </Link>
  );
};
