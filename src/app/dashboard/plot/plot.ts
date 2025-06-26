import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

interface PlotData {
  id: number;
  name: string;
  cropType: string;
  area: number;
  status: string;
  statusText: string;
  lastUpdate: string;
}

@Component({
  selector: 'app-plot',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './plot.html',
  styleUrl: './plot.scss'
})
export class Plot {
  private router = inject(Router);
  private authService = inject(AuthService);

  // Dashboard metrics
  totalPlots = 5;
  totalHectares = 12.5;
  currentTemp = 24;
  humidity = 65;

  // Sample plot data
  plots: PlotData[] = [
    {
      id: 1,
      name: 'Parcela Norte',
      cropType: 'Maíz',
      area: 3.2,
      status: 'good',
      statusText: 'Excelente',
      lastUpdate: '2025-06-24'
    },
    {
      id: 2,
      name: 'Parcela Sur',
      cropType: 'Soja',
      area: 4.8,
      status: 'warning',
      statusText: 'Atención',
      lastUpdate: '2025-06-23'
    },
    {
      id: 3,
      name: 'Parcela Este',
      cropType: 'Trigo',
      area: 2.1,
      status: 'good',
      statusText: 'Bueno',
      lastUpdate: '2025-06-24'
    },
    {
      id: 4,
      name: 'Parcela Oeste',
      cropType: 'Cebada',
      area: 1.9,
      status: 'danger',
      statusText: 'Crítico',
      lastUpdate: '2025-06-22'
    },
    {
      id: 5,
      name: 'Parcela Central',
      cropType: 'Avena',
      area: 0.5,
      status: 'good',
      statusText: 'Excelente',
      lastUpdate: '2025-06-24'
    }
  ];

  navigateToAddPlot() {
    this.router.navigate(['/dashboard/add-plot']);
  }

  viewPlot(id: number) {
    console.log('Ver parcela:', id);
    // Implementar navegación a vista detallada
  }

  editPlot(id: number) {
    console.log('Editar parcela:', id);
    // Implementar edición de parcela
  }

  deletePlot(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar esta parcela?')) {
      this.plots = this.plots.filter(plot => plot.id !== id);
      this.totalPlots = this.plots.length;
      this.totalHectares = this.plots.reduce((sum, plot) => sum + plot.area, 0);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
