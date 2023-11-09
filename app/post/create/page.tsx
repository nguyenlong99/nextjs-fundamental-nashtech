import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export default async function Page() {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  const isAuthenticatedUser = await isAuthenticated();
  const isCreatePermission = getPermission('create-items-permission');

  if (!isAuthenticatedUser || !isCreatePermission) redirect('/');

  return <div>helo</div>;
}
