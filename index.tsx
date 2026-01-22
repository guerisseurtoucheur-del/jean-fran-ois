
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";
import { 
  Menu, X, Phone, Heart, MessageCircle, Home, LayoutDashboard, Globe, 
  CreditCard, Wind, Clock, Users, Mail, ArrowDown, MapPin,
  Send, HeartHandshake, AlertCircle, Upload, Camera, CheckCircle2, 
  Loader2, Calendar, User, FileText, Sparkles, ArrowRight, Trash2, 
  CheckCircle, Search, ShieldCheck, Download, Star, Quote, Plus, Minus,
  Activity, Zap, Brain, MousePointer2, Play, Pause, RotateCcw, Lock, ExternalLink
} from 'lucide-react';

// --- TYPES & HELPERS ---
interface Message { role: 'user' | 'model'; text: string; isError?: boolean; }
interface Request { 
  id: string; 
  firstName: string; 
  lastName: string; 
  email: string; 
  phone: string; 
  explanation: string; 
  date: string; 
  status: 'pending' | 'active' | 'completed'; 
  notes?: string;
  result?: string;
}

// ... rest of file (identical parts kept below)
