import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default function Page() {
  const { isAuthenticated, getUser, getPermission, getPermissions } = getKindeServerSession();

  return <div>helo</div>;
}
