import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, XCircle } from 'lucide-react';

interface TestResultModalProps {
    isOpen: boolean;
    onClose: () => void;
    result: any;
}

export const TestResultModal = ({ isOpen, onClose, result }: TestResultModalProps) => {
    if (!result) return null;

    const score = result.score ?? result.correctAnswers ?? 0;
    const total = result.total ?? result.maxScore ?? result.totalQuestions ?? 0;
    const percentage = result.percentage ?? (total > 0 ? Math.round((score / total) * 100) : 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        className="absolute inset-0 bg-black/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-auto max-h-[80vh]"
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-bold">Test Details</h3>
                            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="text-center">
                                <div className="text-4xl font-bold">{score}/{total}</div>
                                <div className="text-xl text-gray-700">{percentage}%</div>
                            </div>

                            {Array.isArray(result.questionReview) && result.questionReview.length > 0 ? (
                                <div className="space-y-3">
                                    {result.questionReview.map((q: any, idx: number) => {
                                        const isCorrect = !!q.isCorrect;
                                        return (
                                            <div key={q.id || idx} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                                                <div className="flex items-start gap-3">
                                                    {isCorrect ? (
                                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                                    ) : (
                                                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                                    )}
                                                    <div className="flex-1">
                                                        <p className="font-semibold">Q{idx + 1}: {q.question}</p>
                                                        <p className="text-sm text-gray-700 mt-1">Your answer: {typeof q.userAnswer === 'number' ? String.fromCharCode(65 + q.userAnswer) : '(not answered)'}</p>
                                                        {!isCorrect && (
                                                            <p className="text-sm text-green-700">Correct: {String.fromCharCode(65 + (q.correctAnswer ?? 0))}</p>
                                                        )}
                                                        {q.explanation && <p className="text-xs text-gray-600 mt-2">💡 {q.explanation}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center text-sm text-gray-600">No question-level details available.</div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default TestResultModal;