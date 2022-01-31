export default function ParseNameToApiFormat(value?: string | null) {
	if (!value) throw new Error('Invalid value - ' + value);
	return value.replaceAll(' ', '-').toLowerCase();
}
