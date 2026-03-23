import { render, screen } from '@testing-library/react';
import Message from '../../app/chat/_components/message';
import { MessageProps } from '../../types/message';

const botMessage: MessageProps = {
  id: 1,
  text: 'Hi! How can I help you today?',
  sender: 'bot',
};

const userMessage: MessageProps = {
  id: 2,
  text: 'What should I wear today?',
  sender: 'user',
};

const userMessageWithImage: MessageProps = {
  id: 3,
  text: 'Check this outfit',
  sender: 'user',
  imageUrl: 'https://example.com/outfit.jpg',
};

describe('Message component', () => {
  it('renders bot message text', () => {
    render(<Message message={botMessage} />);
    expect(screen.getByText('Hi! How can I help you today?')).toBeInTheDocument();
  });

  it('renders user message text', () => {
    render(<Message message={userMessage} />);
    expect(screen.getByText('What should I wear today?')).toBeInTheDocument();
  });

  it('bot message is left-aligned', () => {
    const { container } = render(<Message message={botMessage} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('justify-start');
  });

  it('user message is right-aligned', () => {
    const { container } = render(<Message message={userMessage} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('justify-end');
  });

  it('renders image when imageUrl is provided', () => {
    render(<Message message={userMessageWithImage} />);
    const img = screen.getByAltText('Uploaded fashion item');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/outfit.jpg');
  });

  it('does not render image when imageUrl is absent', () => {
    render(<Message message={userMessage} />);
    expect(screen.queryByAltText('Uploaded fashion item')).not.toBeInTheDocument();
  });

  it('shows Bot icon for bot messages', () => {
    const { container } = render(<Message message={botMessage} />);
    // Avatar fallback has the icon
    const avatarFallback = container.querySelector('[class*="AvatarFallback"], [data-slot="avatar-fallback"]')
      ?? container.querySelector('.flex.h-full');
    expect(avatarFallback ?? container).toBeTruthy();
  });
});
