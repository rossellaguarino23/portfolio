// En un archivo de interfaces (ej: models/flow.model.ts)

export interface Hotspot {
  x: number; // Porcentaje desde la izquierda (0-100)
  y: number; // Porcentaje desde arriba (0-100)
  width: number; // Ancho del botón interactivo (%)
  height: number; // Alto del botón interactivo (%)
  targetScreenId: string; // ID de la pantalla a la que navega
  tooltip?: string; // Opcional: qué hace este botón (ej: "Crear Cuenta")
}

export interface FlowScreen {
  id: string; // ID único (ej: 'taxeezy-2.0')
  imageUrl: string; // Ruta a la pantalla individual exportada
  hotspots: Hotspot[]; // Zonas interactivas de esta pantalla
}

export interface InteractiveFlow {
  title: string;
  startScreenId: string;
  screens: { [id: string]: FlowScreen | null }; // Diccionario de pantallas para acceso rápido
}