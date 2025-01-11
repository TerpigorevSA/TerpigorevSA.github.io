import React from 'react';
import SignIn, { SignInFields } from './SignIn/SignIn';
import SignUp, { SignUpFields } from './SignUp/SignUp';
import cn from 'clsx';
import styles from './AuthScreen.module.css';
import { useTranslation } from 'react-i18next';
import { AppDispatch, RootState } from '../../app/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { signin, signup, signout } from '../../features/Auth/model/thunks';
import SignOut from './SignOut/SignOut';

export enum AuthAction {
  SignIn = 'signIn',
  SignUp = 'signUp',
  SignOut = 'signOut',
}

type AuthScreenProps = {
  authAction: AuthAction;
};

const AuthScreen: React.FC<AuthScreenProps> = ({ authAction }) => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const authError = useSelector((state: RootState) => state.auth.error);

  const handleSignInSubmit = (data: SignInFields) => {
    dispatch(signin({ email: data.email, password: data.password }));
  };
  const handleSignUpSubmit = (data: SignUpFields) => {
    dispatch(signup({ email: data.email, password: data.password, commandId: '6d4672bc-6245-4b6b-a4c4-acdb6cf3fc89' }));
  };

  const handleSignOut = () => dispatch(signout());

  if (authStatus === 'loading') {
    return <div>{'loading'}</div>;
  }

  const signIn = <>{authAction === AuthAction.SignIn && <SignIn onSubmit={handleSignInSubmit} />}</>;
  const signUp = <>{authAction === AuthAction.SignUp && <SignUp onSubmit={handleSignUpSubmit} />}</>;
  const signOut = <>{authAction === AuthAction.SignOut && <SignOut onSignOut={handleSignOut} />}</>;

  return (
    <div className={cn(styles.page)}>
      <div>
        {signIn}
        {signUp}
        {signOut}
      </div>
      {authError && <div className={styles.error}>{authError}</div>}
    </div>
  );
};

export default AuthScreen;
