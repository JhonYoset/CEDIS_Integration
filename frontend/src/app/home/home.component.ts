import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];

    // Datos del dashboard
    public dashboardStats = {
      totalDocumentos: 0,
      totalLectores: 0,
      totalPrestamos: 0,
      prestamosPendientes: 0
    };

    public currentUser: any = null;
    public loading = true;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  ngOnInit() {
      // Obtener usuario actual
      this.authService.currentUser$.subscribe(user => {
        console.log('Home component: Current user updated:', user);
        this.currentUser = user;
      });

      // Cargar datos del dashboard
      if (this.authService.isAuthenticated()) {
        this.loadDashboardData();
      } else {
        console.log('Home component: User not authenticated, skipping data load');
      }

      // Configurar gráficos
      this.setupCharts();
  }

  private loadDashboardData(): void {
    this.loading = true;
    console.log('Loading dashboard data...');

    // Cargar estadísticas en paralelo
    Promise.all([
      this.apiService.getDocumentos({ page: 1, limit: 1 }).toPromise(),
      this.apiService.getLectores({ page: 1, limit: 1 }).toPromise(),
      this.apiService.getPrestamos({ page: 1, limit: 1 }).toPromise(),
      this.apiService.getPrestamosPendientes().toPromise()
    ]).then(([documentos, lectores, prestamos, pendientes]) => {
      console.log('Dashboard data loaded:', { documentos, lectores, prestamos, pendientes });
      this.dashboardStats = {
        totalDocumentos: documentos?.total || 0,
        totalLectores: lectores?.total || 0,
        totalPrestamos: prestamos?.total || 0,
        prestamosPendientes: pendientes?.length || 0
      };
      this.loading = false;
    }).catch(error => {
      console.error('Error loading dashboard data:', error);
      this.loading = false;
    });
  }

  private setupCharts(): void {
      this.emailChartType = ChartType.Pie;
      this.emailChartData = {
        labels: ['Disponibles', 'Prestados', 'Vencidos'],
        series: [65, 28, 7]
      };
      this.emailChartLegendItems = [
        { title: 'Disponibles', imageClass: 'fa fa-circle text-success' },
        { title: 'Prestados', imageClass: 'fa fa-circle text-info' },
        { title: 'Vencidos', imageClass: 'fa fa-circle text-danger' }
      ];

      this.hoursChartType = ChartType.Line;
      this.hoursChartData = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
        series: [
          [45, 52, 48, 61, 55, 67, 73, 68],
          [23, 28, 31, 35, 42, 38, 45, 41]
        ]
      };
      this.hoursChartOptions = {
        low: 0,
        high: 80,
        showArea: true,
        height: '245px',
        axisX: {
          showGrid: false,
        },
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 3
        }),
        showLine: false,
        showPoint: false,
      };
      this.hoursChartResponsive = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.hoursChartLegendItems = [
        { title: 'Préstamos', imageClass: 'fa fa-circle text-info' },
        { title: 'Devoluciones', imageClass: 'fa fa-circle text-success' }
      ];

      this.activityChartType = ChartType.Bar;
      this.activityChartData = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        series: [
          [42, 38, 32, 47, 35, 28, 31, 34, 45, 52, 48, 61],
          [28, 24, 20, 35, 25, 18, 22, 26, 32, 38, 35, 42]
        ]
      };
      this.activityChartOptions = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      };
      this.activityChartResponsive = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.activityChartLegendItems = [
        { title: 'Documentos Nuevos', imageClass: 'fa fa-circle text-info' },
        { title: 'Lectores Nuevos', imageClass: 'fa fa-circle text-success' }
      ];
    }
}
