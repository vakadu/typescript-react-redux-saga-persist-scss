import React, { useRef } from 'react';

import Container from '@/atoms/container';
import Typography from '@/atoms/typography';
import Layout from '@/molecules/layout';
import Input from '@/atoms/input';
import Button from '@/atoms/button';
import { useForm } from 'react-hook-form';

import { existing } from './api/static';

export default function Home() {
	const { register, handleSubmit, formState: { errors, isDirty, isValid, dirtyFields } } = useForm({ mode: 'onChange' });

	console.log(dirtyFields, 'isValidating');
	
	const onSubmit = async (data, e) => {
		console.log(data, e);
		
	};
	
    return (
		<Container>
			<Layout>
				<div style={{ marginTop: 50 }}>
					<form onSubmit={ handleSubmit(onSubmit) }>
						<div className='arzooo-row'>
						{
							existing.inputs.map(input => {
								return(
									<Input
										key={ input.name }
										label={ input.label }
										name={ input.name }
										classes={ input.class }
										register={ register }
										errors={ errors }
										validations={ input.validations }
										dirtyFields={ dirtyFields }
									/>
								);
							})
						}
						</div>
						<Button
							type='submit'
							disabled={ !isDirty || (isDirty && !isValid) }
						>
							Submit
						</Button>
					</form>
				</div>
			</Layout>
		</Container>
    )
}
