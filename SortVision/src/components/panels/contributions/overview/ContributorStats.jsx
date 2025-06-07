import React from 'react';
import { Users, GitCommit, Star, GitFork, RefreshCw } from 'lucide-react';

/**
 * Contributor Stats Component
 * 
 * A visually rich component displaying contribution statistics.
 * Features:
 * - Animated background effects and transitions
 * - Real-time contributor metrics
 * - Interactive hover states
 * - Terminal-style design
 * - Visual representations of data
 * - Refresh functionality in header
 */
const ContributorStats = ({ stats, loading, onRefresh }) => {
  const statItems = [
    {
      icon: Users,
      label: 'Contributors',
      value: stats?.totalContributors || 0,
      color: 'emerald',
      description: 'Amazing developers'
    },
    {
      icon: GitCommit,
      label: 'Total Commits',
      value: stats?.totalCommits || 0,
      color: 'blue',
      description: 'Lines of impact'
    },
    {
      icon: Star,
      label: 'GitHub Stars',
      value: stats?.totalStars || 0,
      color: 'yellow',
      description: 'Community love'
    },
    {
      icon: GitFork,
      label: 'Forks',
      value: stats?.totalForks || 0,
      color: 'purple',
      description: 'Project copies'
    }
  ];

  return (
    <div className="mb-4 relative group">
      {/* Animated background glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative bg-slate-900 p-4 rounded border border-slate-800 transition-all duration-500 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50 group/stats overflow-hidden h-full">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Animated grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:8px_8px] opacity-30"></div>
            
            {/* Floating particles */}
            <div className="absolute h-2 w-2 rounded-full bg-emerald-500/50 top-[10%] left-[20%] animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="absolute h-1 w-1 rounded-full bg-blue-500/50 top-[30%] left-[70%] animate-pulse" style={{ animationDuration: '2.3s' }}></div>
            <div className="absolute h-1.5 w-1.5 rounded-full bg-purple-500/50 top-[70%] left-[30%] animate-pulse" style={{ animationDuration: '4s' }}></div>
            
            {/* Animated code lines */}
            <div className="absolute top-[15%] left-0 h-px w-[30%] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent animate-[moveRight_15s_linear_infinite]"></div>
            <div className="absolute top-[45%] left-0 h-px w-[20%] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-[moveRight_12s_linear_infinite]"></div>
            <div className="absolute top-[75%] left-0 h-px w-[40%] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-[moveRight_18s_linear_infinite]"></div>
          </div>
        </div>
        
        {/* Animated corner accent */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-md group-hover/stats:scale-150 transition-transform duration-700"></div>
        
        {/* Animated bottom line */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover/stats:w-full bg-gradient-to-r from-emerald-500/50 via-blue-500/50 to-purple-500/50 rounded transition-all duration-700"></div>
        
        <div className="font-mono text-sm text-slate-400 mb-4 flex items-center justify-between relative z-10 group-hover/stats:text-emerald-400 transition-colors duration-300">
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4 text-emerald-400 animate-pulse" style={{ animationDuration: '4s' }} />
            <span className="transition-colors duration-300">// contributor metrics</span>
          </div>
          {onRefresh && (
            <button
              onClick={onRefresh}
              disabled={loading}
              className="p-1 hover:bg-slate-800 rounded transition-colors duration-200 disabled:opacity-50"
              title="Refresh metrics data"
            >
              <RefreshCw className={`h-3 w-3 text-slate-500 hover:text-emerald-400 transition-colors ${loading ? 'animate-spin' : ''}`} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 relative z-10">
          {statItems.map((item, index) => (
            <StatCard key={item.label} item={item} loading={loading} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Individual Stat Card Component
const StatCard = ({ item, loading, index }) => {
  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      text: 'text-emerald-400',
      glow: 'shadow-emerald-500/20'
    },
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      text: 'text-blue-400',
      glow: 'shadow-blue-500/20'
    },
    yellow: {
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/20',
      text: 'text-yellow-400',
      glow: 'shadow-yellow-500/20'
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      text: 'text-purple-400',
      glow: 'shadow-purple-500/20'
    }
  };

  const colors = colorClasses[item.color] || colorClasses.emerald;
  const Icon = item.icon;
  const delay = index * 100;

  return (
    <div 
      className={`group/card relative p-3 rounded-lg border ${colors.border} ${colors.bg} hover:scale-105 transition-all duration-300 animate-fade-up animate-once overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Card shimmer effect */}
      <div className="absolute inset-0 w-0 group-hover/card:w-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="flex items-center space-x-3 relative z-10">
        <div className={`p-2 rounded-md ${colors.bg} border ${colors.border} ${colors.glow} shadow-lg`}>
          <Icon className={`w-4 h-4 ${colors.text}`} />
        </div>
        <div>
          <div className={`text-lg font-bold ${colors.text} font-mono`}>
            {loading ? (
              <div className="w-8 h-4 bg-slate-700 rounded animate-pulse"></div>
            ) : (
              item.value.toLocaleString()
            )}
          </div>
          <div className="text-xs text-slate-400 font-mono">{item.label}</div>
          <div className="text-[10px] text-slate-500">{item.description}</div>
        </div>
      </div>
      
      {/* Animated progress bar */}
      <div className="mt-2 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div 
          className={`h-full ${colors.bg} animate-pulse`}
          style={{ 
            width: loading ? '0%' : '100%',
            transition: 'width 1s ease-out',
            transitionDelay: `${delay + 500}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

export default ContributorStats; 