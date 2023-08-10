import { it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Hello from './Hello.svelte';



it('renders hello into the document', () => {
	render(Hello, { name: 'Svelte'});
	expect(document.body).toHaveTextContent('Hello. Svelte');
})
