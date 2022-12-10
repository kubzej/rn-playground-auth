import { useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import { Alert } from 'react-native';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (err) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in, please check your credentials or try again later.'
      );
    }

    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Logging in....' />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
