import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import Link from '@mui/material/Link'
import { invoke } from '@tauri-apps/api'
import { Box, Button, Typography } from '@mui/material'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box>
        <Link href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </Link>
        <Link href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </Link>
      </Box>
      <Typography variant="h1">Vite + Preact + MUI</Typography>
      <Button
        variant="contained"
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
          invoke('greet', { value: newCount })
            .then(console.log);
        }}
        sx={{ margin: 4 }}
      >
        count is {count}
      </Button>
      <Typography variant="body1">
        Edit <code>src/app.tsx</code> and save to test HMR
      </Typography>
      <Typography variant="body2">
        Click on the Vite and Preact logos to learn more
      </Typography>
    </Box>
  )
}
