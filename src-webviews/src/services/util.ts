import React from 'react';
import moment from 'moment';

export const removeAccents = (text: string) => {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
};

export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export const formatValue = (value: number) => {
  return value.toLocaleString('pt-br');
}

export const formatDateTime = (date: Date) => {
  return moment(date).format('DD/MM/yyyy HH:mm:ss');
}

export function formatDateString(dateString) {
    const date = new Date(dateString); // Converter a string para um objeto Date
    const day = String(date.getDate()).padStart(2, '0'); // Adicionar zero à esquerda se necessário
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês (0-11)
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0'); // Hora
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Minutos

    if (year == 1)
      return "Nunca"

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export const formatDate = (date: Date) => {
  return moment(date).format('DD/MM/yyyy');
}

export const formatTime = (date: Date) => {
  return moment(date).format('HH:mm:ss');
}

export function formatTimestamp(timestamp) {
  const date = new Date(timestamp * 1000); // Multiplica por 1000 se o timestamp estiver em segundos
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}
