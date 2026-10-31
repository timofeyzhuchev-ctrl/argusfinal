// Результат анализа курения по видео. Намеренно не содержит данных о людях:
// ни возраста, ни пола, ни внешности, ни лиц, ни личности.

export type VideoSmokingEventType = 'cigarette' | 'vape' | 'hookah' | 'smoke_only' | 'unknown';

export interface VideoSmokingEvent {
  start: string; // "MM:SS" или "HH:MM:SS"
  end: string;
  startSeconds: number;
  endSeconds: number;
  type: VideoSmokingEventType;
  typeLabelRu: string;
  description: string;
  confidence: number; // 0..100
}

export interface VideoSmokingAnalysis {
  smokingDetected: boolean;
  summary: string;
  events: VideoSmokingEvent[];
  model: string;
  analyzedAt: string;
}
