'use client';

import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PostClientService from '@/lib/services/Client/PostClientService';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function FormWrapper() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const isImageValid = useRef(false);
  const onSubmit = (data: any) => {
    (async () => {
      try {
        const createdPost = await PostClientService.createPost(data);
        isImageValid.current = false;
        await fetch(data.backgroundImage, { mode: 'no-cors' })
          .then((res) => {
            isImageValid.current = true;
          })
          .catch((err) => {
            isImageValid.current = false;
          });

        if (!isImageValid.current) return alert('Please input valid backgroung image URL');

        if (Object.keys(createdPost).length > 0) {
          alert('Create post successfully');
          router.push('/');
        }
      } catch (e) {
        console.error(JSON.stringify(e, null, 4));
        alert('Create post failed');
      }
    })();
  };

  const onError = (error: any) => {
    console.log('ERROR:::', error);
  };
  return (
    <div className='container mt-3 py-3'>
      <div className='row my-4 h-100'>
        <div className='col-md-12 col-lg-12 col-sm-8 mx-auto'>
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <Form.Group controlId='title' className='m-3'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                placeholder='Enter title'
                {...register('title', {
                  required: 'Title is required',
                })}
              />
              {errors.title && (
                <Form.Text className='text-danger'>{errors.title.message?.toString()}</Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId='subTitle'>
              <Form.Label>Sub Title</Form.Label>
              <Form.Control
                placeholder='Enter Sub Title'
                {...register('subTitle', {
                  required: 'Sub Title is required',
                })}
              />
              {errors.subTitle && (
                <Form.Text className='text-danger'>{errors.subTitle.message?.toString()}</Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId='backgroundImage'>
              <Form.Label>Background Image</Form.Label>
              <Form.Control
                placeholder='Enter Background Image'
                {...register('backgroundImage', {
                  required: 'Background Image is required',
                })}
              />
              {errors.backgroundImage && (
                <Form.Text className='text-danger'>
                  {errors.backgroundImage.message?.toString()}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId='content'>
              <Form.Label>Content</Form.Label>
              <Form.Control
                as='textarea'
                rows={10}
                placeholder='Enter Content'
                {...register('content', {
                  required: 'Content is required',
                })}
              />
              {errors.content && (
                <Form.Text className='text-danger'>{errors.content.message?.toString()}</Form.Text>
              )}
            </Form.Group>
            <hr />
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
