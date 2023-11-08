'use client';

import Layout from '@/lib/components/Layout';
import PostClientService from '@/lib/services/Client/PostClientService';
import { useEffect, useState } from 'react';

type PostDetail = {
  backgroundImage: string;
  title: string;
  subTitle: string;
  content: string;
};

const Post = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [postDetail, setPostDetail] = useState<PostDetail>({
    backgroundImage: '/img/loading.jpg',
    title: 'Loading',
    subTitle: '',
    content: 'Please wait while loading data!',
  });

  useEffect(() => {
    (async () => {
      try {
        const postDetail = await PostClientService.getPostById(id);
        setPostDetail(postDetail);
      } catch (e) {
        console.error(e);
        setPostDetail({
          backgroundImage: '/img/404.jpg',
          title: 'not found',
          subTitle: 'not found',
          content: 'there is no data to show',
        });
      }
    })();
  }, [id]);

  return (
    <Layout
      backgroundImage={postDetail.backgroundImage}
      title={postDetail.title}
      subTitle={postDetail.subTitle}
      post={true}
    >
      <article>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'
              dangerouslySetInnerHTML={{ __html: postDetail.content }}
            ></div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
