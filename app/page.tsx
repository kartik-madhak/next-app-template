import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { Box } from '@mantine/core'

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Box w="100vw" bg="primaryA">
Hello world
      </Box>
    </>
  );
}
