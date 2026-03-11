const MESH_COLORS = {
  blue:  '#E6EEFF',
  haze:  '#F2EDF8',
  ivory: '#FAF8F6',
  lilac: '#E2DAF4',
  peach: '#F6D1C6',
};

// Mirrors the iOS MeshGradient 3×3 grid:
//   points:  (0,0) (0.5,0) (1,0) / (0,0.5) (0.5,0.5) (1,0.5) / (0,1) (0.5,1) (1,1)
//   colors:  lilac  lilac   blue /   peach   ivory     blue   /  peach  haze   blue
const MESH_STOPS: Array<{ x: number; y: number; color: string }> = [
  { x:   0, y:   0, color: MESH_COLORS.lilac },
  { x:  50, y:   0, color: MESH_COLORS.lilac },
  { x: 100, y:   0, color: MESH_COLORS.blue  },
  { x:   0, y:  50, color: MESH_COLORS.peach },
  { x:  50, y:  50, color: MESH_COLORS.ivory },
  { x: 100, y:  50, color: MESH_COLORS.blue  },
  { x:   0, y: 100, color: MESH_COLORS.peach },
  { x:  50, y: 100, color: MESH_COLORS.haze  },
  { x: 100, y: 100, color: MESH_COLORS.blue  },
];

// Converts a 6-digit hex color to its `R G B` string so we can build
// `rgba(R, G, B, 0)` as the transparent stop — this avoids the grey
// fringing caused by CSS `transparent` (which is rgba(0,0,0,0)).
function hexToTransparent(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, 0)`;
}

const meshBackground = MESH_STOPS.map(
  ({ x, y, color }) =>
    `radial-gradient(ellipse at ${x}% ${y}%, ${color} 0%, ${hexToTransparent(color)} 65%)`,
).join(', ');

interface MeshGradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function MeshGradientBackground({
  children,
  className = '',
}: MeshGradientBackgroundProps) {
  return (
    <div
      style={{ background: meshBackground }}
      className={`min-h-screen overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
