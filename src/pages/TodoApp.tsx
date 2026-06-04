import { useState } from 'react';
import type { Todo } from '@/types';
import { Plus, Trash2, Check, Circle, ArrowLeft, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';

type Filter = 'all' | 'active' | 'completed';
type Priority = Todo['priority'];

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Build an awesome portfolio', completed: true, priority: 'high', createdAt: new Date() },
    { id: 2, text: 'Learn TypeScript deeply', completed: false, priority: 'medium', createdAt: new Date() },
    { id: 3, text: 'Contribute to open source', completed: false, priority: 'low', createdAt: new Date() },
  ]);
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [filter, setFilter] = useState<Filter>('all');

  const addTodo = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTodos(prev => [
      { id: Date.now(), text: trimmed, completed: false, priority, createdAt: new Date() },
      ...prev,
    ]);
    setInput('');
  };

  const toggleTodo = (id: number) =>
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const deleteTodo = (id: number) =>
    setTodos(prev => prev.filter(t => t.id !== id));

  const clearCompleted = () =>
    setTodos(prev => prev.filter(t => !t.completed));

  const filtered = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const activeCount = todos.filter(t => !t.completed).length;

  const priorityColor: Record<Priority, string> = {
    high: 'text-red-400',
    medium: 'text-yellow-400',
    low: 'text-green-400',
  };

  const priorityBg: Record<Priority, string> = {
    high: 'bg-red-500/10 border-red-500/30',
    medium: 'bg-yellow-500/10 border-yellow-500/30',
    low: 'bg-green-500/10 border-green-500/30',
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          Portfolio
        </Link>
        <span className="text-gray-700">|</span>
        <h1 className="text-lg font-bold tracking-tight">
          <span className="text-violet-400">Todo</span> App
        </h1>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-12">
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            My{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Tasks
            </span>
          </h2>
          <p className="text-gray-400 text-sm">
            {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
          </p>
        </div>

        {/* Input */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 space-y-3">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addTodo()}
              placeholder="Add a new task..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
            />
            <button
              onClick={addTodo}
              className="bg-violet-600 hover:bg-violet-500 transition-colors rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm font-medium"
            >
              <Plus size={16} />
              Add
            </button>
          </div>
          {/* Priority selector */}
          <div className="flex items-center gap-2">
            <Flag size={14} className="text-gray-500" />
            <span className="text-xs text-gray-500 mr-1">Priority:</span>
            {(['low', 'medium', 'high'] as Priority[]).map(p => (
              <button
                key={p}
                onClick={() => setPriority(p)}
                className={`text-xs px-3 py-1 rounded-full border transition-all capitalize ${
                  priority === p
                    ? priorityBg[p] + ' ' + priorityColor[p] + ' font-semibold'
                    : 'border-white/10 text-gray-500 hover:border-white/20'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-1 bg-white/5 rounded-xl p-1 mb-6">
          {(['all', 'active', 'completed'] as Filter[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                filter === f
                  ? 'bg-violet-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Todo list */}
        <div className="space-y-2">
          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-600">
              <Check size={40} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">No tasks here</p>
            </div>
          )}
          {filtered.map(todo => (
            <div
              key={todo.id}
              className={`group flex items-center gap-3 bg-white/5 border rounded-xl px-4 py-3 transition-all hover:bg-white/8 ${
                todo.completed ? 'border-white/5 opacity-60' : 'border-white/10'
              }`}
            >
              {/* Toggle */}
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  todo.completed
                    ? 'bg-violet-600 border-violet-600'
                    : 'border-gray-600 hover:border-violet-400'
                }`}
              >
                {todo.completed && <Check size={11} />}
                {!todo.completed && (
                  <Circle size={11} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                )}
              </button>

              {/* Text */}
              <span
                className={`flex-1 text-sm ${
                  todo.completed ? 'line-through text-gray-500' : 'text-gray-100'
                }`}
              >
                {todo.text}
              </span>

              {/* Priority badge */}
              <span
                className={`text-xs px-2 py-0.5 rounded-full border capitalize shrink-0 ${
                  priorityBg[todo.priority]
                } ${priorityColor[todo.priority]}`}
              >
                {todo.priority}
              </span>

              {/* Delete */}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="shrink-0 text-gray-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        {todos.some(t => t.completed) && (
          <div className="mt-6 text-center">
            <button
              onClick={clearCompleted}
              className="text-xs text-gray-500 hover:text-red-400 transition-colors underline underline-offset-2"
            >
              Clear completed
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
