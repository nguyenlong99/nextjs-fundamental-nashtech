import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import FormWrapper from './_components/FormWrapper';
import Layout from '@/lib/components/Layout';

export default async function Page() {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  const isAuthenticatedUser = await isAuthenticated();
  const isCreatePermission = await getPermission('create-items-permission');
  const backgroundImage = '/img/create-post.jpg';
  const title = 'Create new post';
  const subTitle = '';

  if (!isAuthenticatedUser || !isCreatePermission.isGranted) redirect('/');

  return (
    <Layout backgroundImage={backgroundImage} title={title} subTitle={subTitle} post={false}>
      <FormWrapper />
    </Layout>
  );
}
